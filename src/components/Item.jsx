import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const Item = ({ imageUrl, title, price }) => {
  return (
    <Card
      elevation="0"
      sx={{ width: 250, borderRadius: '12px 12px 12px 12px' }}
    >
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={title}
        sx={{ borderRadius: '12px' }}
      />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="left">
          <Typography noWrap variant="body1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
