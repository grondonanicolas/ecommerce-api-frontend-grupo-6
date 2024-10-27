import { Box, Typography, Grid2, Divider, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: 4 }}>
      {/* Main Footer Section */}
      <Grid2 container spacing={4}>
        {/* Company Info */}
        <Grid2 xs={12} md={3}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
            Sportify
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid2>

        {/* Links Sections */}
        <Grid2 xs={12} md={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}
          >
            COMPANY
          </Typography>
          <Typography variant="body2" color="textSecondary">
            About
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Features
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Works
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Career
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}
          >
            HELP
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Customer Support
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Delivery Details
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Terms & Conditions
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Privacy Policy
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}
          >
            FAQ
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Account
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Manage Deliveries
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Orders
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Payments
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}
          >
            RESOURCES
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Free eBooks
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Development Tutorial
          </Typography>
          <Typography variant="body2" color="textSecondary">
            How to - Blog
          </Typography>
          <Typography variant="body2" color="textSecondary">
            YouTube Playlist
          </Typography>
        </Grid2>
      </Grid2>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Bottom Footer Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>

        {/* Payment Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box
            component="img"
            src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-visa-icon-PNG.png"
            alt="Visa"
            sx={{ width: 40, height: 25 }}
          />
          <Box
            component="img"
            src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat-rounded/mastercard.svg"
            alt="MasterCard"
            sx={{ width: 40, height: 25 }}
          />
          <Box
            component="img"
            src="https://static-00.iconduck.com/assets.00/paypal-icon-2048x1313-2rx1ayax.png"
            alt="PayPal"
            sx={{ width: 40, height: 25 }}
          />
          <Box
            component="img"
            src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png"
            alt="ApplePay"
            sx={{ width: 40, height: 25 }}
          />
          <Box
            component="img"
            src="https://static-00.iconduck.com/assets.00/googlepay-icon-2048x1311-xt5sksxf.png"
            alt="GooglePay"
            sx={{ width: 40, height: 25 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
