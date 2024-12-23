/*
  # Fix duplicate client phases

  1. Changes
    - Add unique constraint on client_id to prevent duplicates
    - Clean up existing duplicate records by keeping the latest one
    - Add trigger to maintain single phase record per client
  
  2. Security
    - Maintain existing RLS policies
*/

-- First, clean up duplicate records keeping only the most recent one
WITH latest_phases AS (
  SELECT DISTINCT ON (client_id) *
  FROM client_phases
  ORDER BY client_id, phase_started_at DESC
)
DELETE FROM client_phases
WHERE id NOT IN (
  SELECT id FROM latest_phases
);

-- Add unique constraint on client_id
ALTER TABLE client_phases
DROP CONSTRAINT IF EXISTS client_phases_client_id_unique;

ALTER TABLE client_phases
ADD CONSTRAINT client_phases_client_id_unique UNIQUE (client_id);

-- Create function to handle phase updates
CREATE OR REPLACE FUNCTION handle_phase_update()
RETURNS TRIGGER AS $$
BEGIN
  -- If a record already exists, update it instead of inserting
  IF EXISTS (SELECT 1 FROM client_phases WHERE client_id = NEW.client_id) THEN
    UPDATE client_phases
    SET 
      current_phase = NEW.current_phase,
      phase_started_at = NEW.phase_started_at,
      next_action = NEW.next_action,
      updated_at = now()
    WHERE client_id = NEW.client_id;
    RETURN NULL;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to handle phase updates
DROP TRIGGER IF EXISTS handle_phase_update_trigger ON client_phases;

CREATE TRIGGER handle_phase_update_trigger
BEFORE INSERT ON client_phases
FOR EACH ROW
EXECUTE FUNCTION handle_phase_update();