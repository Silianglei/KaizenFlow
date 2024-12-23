-- Drop existing unique constraint
ALTER TABLE client_details
DROP CONSTRAINT IF EXISTS client_details_client_id_unique;

-- Add new unique constraint with proper ON CONFLICT handling
ALTER TABLE client_details
ADD CONSTRAINT client_details_client_id_unique UNIQUE (client_id);

-- Create function to handle client details updates
CREATE OR REPLACE FUNCTION handle_client_details_update()
RETURNS TRIGGER AS $$
BEGIN
  -- If a record already exists, update it instead of inserting
  IF EXISTS (SELECT 1 FROM client_details WHERE client_id = NEW.client_id) THEN
    UPDATE client_details
    SET 
      company_name = NEW.company_name,
      company_url = NEW.company_url,
      phone_number = NEW.phone_number,
      updated_at = now()
    WHERE client_id = NEW.client_id;
    RETURN NULL;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to handle client details updates
DROP TRIGGER IF EXISTS handle_client_details_update_trigger ON client_details;

CREATE TRIGGER handle_client_details_update_trigger
BEFORE INSERT ON client_details
FOR EACH ROW
EXECUTE FUNCTION handle_client_details_update();