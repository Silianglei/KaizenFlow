/*
  # Fix Client Phase Policies

  1. Changes
    - Drop existing policies
    - Add new comprehensive policies for client phases
    - Allow service role full access
    - Fix phase creation during signup
  
  2. Security
    - Maintains row-level security
    - Allows proper phase creation during signup
    - Ensures data integrity
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can manage own phases" ON client_phases;
DROP POLICY IF EXISTS "Allow initial phase creation" ON client_phases;

-- Create new policies for client_phases
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

-- Allow service role full access
CREATE POLICY "Service role has full access"
  ON client_phases
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);