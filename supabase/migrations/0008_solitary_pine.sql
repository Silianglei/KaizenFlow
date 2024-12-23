/*
  # Fix Client Details RLS and Creation

  1. Changes
    - Add upsert policy for client_details
    - Fix RLS policies to properly handle initial creation
    - Add proper constraints and defaults
  
  2. Security
    - Maintain RLS protection
    - Allow proper access for authenticated users
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for own details" ON client_details;
DROP POLICY IF EXISTS "Enable insert for own details" ON client_details;
DROP POLICY IF EXISTS "Enable update for own details" ON client_details;
DROP POLICY IF EXISTS "Allow initial details creation during signup" ON client_details;

-- Create new comprehensive policy for client_details
CREATE POLICY "Users can manage own details"
  ON client_details
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

-- Add ON CONFLICT handling to client_details
ALTER TABLE client_details
DROP CONSTRAINT IF EXISTS client_details_client_id_key;

ALTER TABLE client_details
ADD CONSTRAINT client_details_client_id_unique UNIQUE (client_id);