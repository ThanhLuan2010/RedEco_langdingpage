import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" >
      <div className="pt-[10vh]"></div>
      <Box component="main" flexGrow={1} sx={{ py: 3 }}>
        <Typography variant="h4" align="center" sx={{ mt: 4 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Email: contact@company.com
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Phone: 123-456-789
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}