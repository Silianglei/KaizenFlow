/*
  # Fix Client Details RLS Policies

  1. Changes
    - Add insert policy for client_details table
    - Add service role access policy
    - Ensure proper RLS for client details management

  2. Security
    - Enable RLS policies for client_details table
    - Allow authenticated users to manage their own details
    - Allow service role full access for system operations
*/

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view own details" ON client_details;
DROP POLICY IF EXISTS "Users can update own details" ON client_details;

-- Create comprehensive policies for client_details
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

-- Allow service role full access
CREATE POLICY "Service role has full access to client details"
  ON client_details
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);