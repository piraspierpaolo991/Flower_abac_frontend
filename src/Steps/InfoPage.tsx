import { Box, Typography, Container } from '@mui/material';

export const InfoPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Contenuto scrollabile */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 3 }}>
        <Container maxWidth="md">
            {/* Intro */}
            <Typography variant="body1" paragraph>
              The following access rules define who can interact with the system
              resources and under which conditions. These rules are based on the
              Attribute-Based Access Control (ABAC) model, which considers user
              roles, resource properties, and contextual factors. The goal is to
              ensure secure and transparent usage of the platform.
            </Typography>

            {/* Rules */}
            <Typography variant="h6" gutterBottom>
              1. Full access for Administrators
            </Typography>
            <Typography variant="body2" paragraph>
              Users with the role <b>Admin</b> can read, create, update, and
              delete any resource without restrictions.
            </Typography>

            <Typography variant="h6" gutterBottom>
              1.1. Full access for Super Administrators
            </Typography>
            <Typography variant="body2" paragraph>
              Users with the role <b>Super Admin</b> have the same privileges as
              Admins, with unrestricted rights to all resources.
            </Typography>

            <Typography variant="h6" gutterBottom>
              2. Limited access for standard users
            </Typography>
            <Typography variant="body2" paragraph>
              Users with the role <b>User</b> can read or update only
              those documents that are <b>not marked as confidential</b>.
            </Typography>

            <Typography variant="h6" gutterBottom>
              3. Access for document owners
            </Typography>
            <Typography variant="body2" paragraph>
              The owner of a document can always read, update, or delete it,
              regardless of other restrictions.
            </Typography>

            <Typography variant="h6" gutterBottom>
              4. Restriction on locked documents
            </Typography>
            <Typography variant="body2" paragraph>
              If a document is marked as <b>locked</b>, no user is allowed to
              delete it, regardless of their role or permissions.
            </Typography>

            <Typography variant="h6" gutterBottom>
              5. Time restriction on user login
            </Typography>
            <Typography variant="body2" paragraph>
              Users with the role <b>User</b> can log in only until{" "}
              <b>15:30</b>. After this time, login attempts are denied. This
              rule does not apply to other roles.
            </Typography>
        </Container>
      </Box>
    </Box>
  );
};

