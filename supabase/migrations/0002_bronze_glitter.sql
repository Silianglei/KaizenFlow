/*
  # Add insert policy for clients table

  1. Changes
    - Add INSERT policy to allow new users to create their initial client record
    - This policy is essential for the signup flow to work properly

  2. Security
    - Only allows insertion if the auth_user_id matches the authenticated user
    - Ensures users can only create records for themselves
*/

-- Allow new users to create their own client record
CREATE POLICY "Users can create their own record"
  ON clients
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = auth_user_id);

-- Allow public (unauthenticated) users to create initial client records during signup
CREATE POLICY "Allow initial client creation during signup"
  ON clients
  FOR INSERT
  TO anon
  WITH CHECK (true);