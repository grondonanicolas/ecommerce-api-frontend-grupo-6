import { Box, Typography, Grid2, Divider, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: 4, marginTop: 8 }}>
      {/* Main Footer Section */}
      <Grid2 container spacing={4} justifyContent="center">
        {/* Company Info */}
        <Grid2
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
            Sportify
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: 1.5, textAlign: 'center', maxWidth: '400px' }}
          >
            Elevamos tu rendimiento con estilo. Ropa deportiva premium para
            hombres y mujeres que buscan la excelencia.
          </Typography>
          <Box sx={{ mt: 1 }}>
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
          Sportify © 2000-2024, todos los derechos reservados
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
