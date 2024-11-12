import PropTypes from 'prop-types';
import {
  Avatar,
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
} from '@mui/material';

const UserInfo = ({ user }) => {
  // Determine colors based on isAdmin status
  const roleColor = user.isAdmin ? '#d32f2f' : '#0073e6'; // Red for admin, blue for others
  const borderColor = user.isAdmin ? '#d32f2f' : '#0073e6';

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2, borderRadius: 3 }}>
      <Card
        sx={{
          fontWeight: 'bold',
          backgroundColor: '#f9f9fb',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: 3,
          padding: 3,
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={3}>
            <Avatar
              alt={user.firstName}
              src={user.image}
              sx={{
                width: 72,
                height: 72,
                border: `3px solid ${borderColor}`,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', color: '#333' }}
              >
                {user.firstName} {user.lastName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                {user.email}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: 'inline-block',
                  backgroundColor: roleColor,
                  color: 'white',
                  borderRadius: '8px',
                  padding: '4px 12px',
                  fontWeight: 'bold',
                  marginTop: '8px',
                  alignSelf: 'flex-start',
                }}
              >
                {user.role}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ marginY: 2 }} />
          <Box mt={2}>
            <Typography variant="body2" color="textSecondary">
              {/* Add any additional information you want to display here */}
              Bienvenido a tu perfil! Aqui podes ver tus compras y tu
              información.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UserInfo;
