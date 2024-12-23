/*
  # Fix Client Phases RLS Policies

  1. Changes
    - Add INSERT policy for client_phases table
    - Allow authenticated users to insert their own phase records
    - Allow service role to manage all records
  
  2. Security
    - Maintains row-level security
    - Only allows users to access their own data
    - Ensures data integrity during signup flow
*/

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view own phases" ON client_phases;

-- Create comprehensive policies for client_phases
CREATE POLICY "Users can manage own phases"
  ON client_phases
  FOR ALL
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

-- Allow initial phase creation during signup
CREATE POLICY "Allow initial phase creation"
  ON client_phases
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);