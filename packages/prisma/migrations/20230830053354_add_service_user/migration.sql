INSERT INTO "User" ("email", "name") VALUES (
  'serviceaccount@youtiva.com',
  'Service Account'
) ON CONFLICT DO NOTHING;
