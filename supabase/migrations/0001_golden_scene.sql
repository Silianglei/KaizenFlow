/*
  # Create clients table

  1. New Tables
    - `clients`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `last_login` (timestamp)
      - `status` (text) - For tracking lead/client status
      - `auth_user_id` (uuid) - References auth.users

  2. Security
    - Enable RLS on `clients` table
    - Add policies for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz,
  status text DEFAULT 'lead',
  auth_user_id uuid REFERENCES auth.users(id),
  CONSTRAINT valid_status CHECK (status IN ('lead', 'active', 'inactive'))
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own data
CREATE POLICY "Users can read own data"
  ON clients
  FOR SELECT
  TO authenticated
  USING (auth.uid() = auth_user_id);

-- Allow users to update their own data
CREATE POLICY "Users can update own data"
  ON clients
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = auth_user_id);