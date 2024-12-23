/*
  # Client Phases and Onboarding Schema

  1. New Tables
    - `client_phases`
      - Tracks the current phase and step of each client
      - Phases: onboarding, meeting, proposal, contract, dev, await, launch
    - `client_details`
      - Stores additional client information collected during onboarding
    - `meetings`
      - Stores scheduled consultation meetings
    - `documents`
      - Stores client documents and API keys
    - `status_updates`
      - Stores development status updates
    - `phone_systems`
      - Stores phone system configurations

  2. Changes
    - Add phase-related columns to clients table
    
  3. Security
    - Enable RLS on all new tables
    - Add policies for authenticated access
*/

-- Enum for client phases
CREATE TYPE client_phase AS ENUM (
  'onboarding',
  'meeting',
  'proposal',
  'contract',
  'dev',
  'await',
  'launch'
);

-- Enum for contract status
CREATE TYPE contract_status AS ENUM (
  'pending',
  'signed',
  'expired',
  'cancelled'
);

-- Client phases tracking
CREATE TABLE client_phases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) NOT NULL,
  current_phase client_phase NOT NULL DEFAULT 'onboarding',
  phase_started_at timestamptz NOT NULL DEFAULT now(),
  phase_completed_at timestamptz,
  next_action text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Additional client details
CREATE TABLE client_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) NOT NULL,
  company_name text,
  company_url text,
  phone_number text,
  industry text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(client_id)
);

-- Consultation meetings
CREATE TABLE meetings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) NOT NULL,
  scheduled_at timestamptz NOT NULL,
  duration_minutes integer NOT NULL DEFAULT 45,
  meeting_url text,
  status text NOT NULL DEFAULT 'scheduled',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('scheduled', 'completed', 'cancelled'))
);

-- Client documents and API keys
CREATE TABLE documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) NOT NULL,
  type text NOT NULL,
  name text NOT NULL,
  content text NOT NULL,
  is_sensitive boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT valid_type CHECK (type IN ('api_key', 'document', 'contract'))
);

-- Development status updates
CREATE TABLE status_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) NOT NULL,
  message text NOT NULL,
  type text NOT NULL DEFAULT 'info',
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) NOT NULL,
  CONSTRAINT valid_type CHECK (type IN ('info', 'success', 'warning', 'error'))
);

-- Phone system configurations
CREATE TABLE phone_systems (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) NOT NULL,
  phone_number text,
  voice_id text,
  is_active boolean NOT NULL DEFAULT false,
  settings jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(client_id)
);

-- Enable RLS on all tables
ALTER TABLE client_phases ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE meetings ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE status_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE phone_systems ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Client Phases
CREATE POLICY "Users can view own phases"
  ON client_phases
  FOR SELECT
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE auth_user_id = auth.uid()
  ));

-- Client Details
CREATE POLICY "Users can view own details"
  ON client_details
  FOR SELECT
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE auth_user_id = auth.uid()
  ));

CREATE POLICY "Users can update own details"
  ON client_details
  FOR UPDATE
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE auth_user_id = auth.uid()
  ));

-- Meetings
CREATE POLICY "Users can view own meetings"
  ON meetings
  FOR SELECT
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE auth_user_id = auth.uid()
  ));

-- Documents
CREATE POLICY "Users can view own documents"
  ON documents
  FOR SELECT
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE auth_user_id = auth.uid()
  ));

-- Status Updates
CREATE POLICY "Users can view own status updates"
  ON status_updates
  FOR SELECT
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE auth_user_id = auth.uid()
  ));

-- Phone Systems
CREATE POLICY "Users can view own phone system"
  ON phone_systems
  FOR SELECT
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE auth_user_id = auth.uid()
  ));

-- Functions

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_client_phases_updated_at
  BEFORE UPDATE ON client_phases
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_client_details_updated_at
  BEFORE UPDATE ON client_details
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_meetings_updated_at
  BEFORE UPDATE ON meetings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_documents_updated_at
  BEFORE UPDATE ON documents
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_phone_systems_updated_at
  BEFORE UPDATE ON phone_systems
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Indexes for performance
CREATE INDEX idx_client_phases_client_id ON client_phases(client_id);
CREATE INDEX idx_meetings_client_id ON meetings(client_id);
CREATE INDEX idx_documents_client_id ON documents(client_id);
CREATE INDEX idx_status_updates_client_id ON status_updates(client_id);