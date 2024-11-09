import PropTypes from 'prop-types';
import {
  Avatar,
  Typography,
  Paper,
  Card,
  CardContent,
  Grid2,
} from '@mui/material';

const UserInfo = ({ user }) => {
  return (
    <Paper elevation={3} sx={{ maxWidth: 800, margin: 'auto' }}>
      <Card sx={{ fontWeight: 'bold' }}>
        <CardContent>
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 xs={2}>
              <Avatar
                alt={user.name}
                src={user.avatarUrl}
                sx={{ width: 64, height: 64 }}
              />
            </Grid2>
            <Grid2 xs>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {user.email}
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Paper>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfo;
