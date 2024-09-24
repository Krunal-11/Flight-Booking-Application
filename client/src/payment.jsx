import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";

const PaymentSection = () => {
  return (
    <Box p={4} sx={{ maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" mb={2}>
        Payment Options
      </Typography>

      {/* UPI Payment Option */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box display="flex" alignItems="center">
            <PaymentIcon sx={{ mr: 1 }} />
            <Typography variant="h6">UPI</Typography>
            <Chip label="Recommended" color="success" sx={{ ml: 2 }} />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography>Google Pay, PhonePe, Paytm & more</Typography>
            <img src="" alt="put a Qr code" />
            <br />
            <Button
              variant="contained"
              color="success"
              sx={{ borderRadius: 20 }}
            >
              Next
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Card Payment Option */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Box display="flex" alignItems="center">
            <CreditCardIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Cards</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography>Visa, Mastercard, Rupay & more</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Net Banking Payment Option */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Box display="flex" alignItems="center">
            <AccountBalanceIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Net Banking</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography>All major banks available</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Wallet Payment Option */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Box display="flex" alignItems="center">
            <WalletIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Pay with Wallet</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography>Popular wallets available</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default PaymentSection;
