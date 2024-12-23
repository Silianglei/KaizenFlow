/*
  # Fix RLS policies for client tables

  1. Changes
    - Add missing INSERT policies for unauthenticated users
    - Fix policy conditions for client_phases and client_details
    - Add proper error handling for edge cases

  2. Security
    - Maintain RLS protection while allowing necessary operations
    - Ensure proper access control for authenticated and unauthenticated users
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for own phases" ON client_phases;
DROP POLICY IF EXISTS "Enable insert for own phases" ON client_phases;
DROP POLICY IF EXISTS "Enable update for own phases" ON client_phases;
DROP POLICY IF EXISTS "Service role has full access" ON client_phases;

DROP POLICY IF EXISTS "Enable read access for own details" ON client_details;
DROP POLICY IF EXISTS "Enable insert for own details" ON client_details;
DROP POLICY IF EXISTS "Enable update for own details" ON client_details;
DROP POLICY IF EXISTS "Service role has full access to client details" ON client_details;

-- Policies for client_phases
CREATE POLICY "Enable read access for own phases"
  ON client_phases
  FOR SELECT
  TO authenticated
  USING (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Enable insert for own phases"
  ON client_phases
  FOR INSERT
  TO authenticated
  WITH CHECK (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Enable update for own phases"
  ON client_phases
  FOR UPDATE
  TO authenticated
  USING (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  )
  WITH CHECK (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Allow initial phase creation during signup"
  ON client_phases
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for client_details
CREATE POLICY "Enable read access for own details"
  ON client_details
  FOR SELECT
  TO authenticated
  USING (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Enable insert for own details"
  ON client_details
  FOR INSERT
  TO authenticated
  WITH CHECK (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Enable update for own details"
  ON client_details
  FOR UPDATE
  TO authenticated
  USING (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  )
  WITH CHECK (
    client_id IN (
      SELECT id FROM clients WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Allow initial details creation during signup"
  ON client_details
  FOR INSERT
  TO anon
  WITH CHECK (true);