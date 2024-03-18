import { Box, Tab, Tabs, Typography } from "@mui/material";
import { AppLayout } from "../../components/appLayout/AppLayout";
import { useState } from "react";
import { CustomTabPanel } from "./tabPanel/CustomTabPanel";
import { OfferForm } from "./offerForm/OfferForm";
import { WishForm } from "./wishForm/WishForm";
import { AddressForm } from "./addressForm/AddressForm";

export const SwapPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <AppLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component="h2" fontSize={44} mt={"20px"}>
          Бланк обмена
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
            >
              <Tab
                label="Хочу обменять"
                sx={{
                  ":hover": {
                    bgcolor: "inherit",
                  },
                  width: "33.33333%",
                }}
                {...a11yProps(0)}
              />
              <Tab
                label="Хочу получить"
                sx={{
                  ":hover": {
                    bgcolor: "inherit",
                  },
                  width: "33.33333%",
                }}
                {...a11yProps(1)}
              />
              <Tab
                label="Адрес доставки"
                sx={{
                  ":hover": {
                    bgcolor: "inherit",
                  },
                  width: "33.33333%",
                }}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <OfferForm></OfferForm>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <WishForm></WishForm>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <AddressForm></AddressForm>
          </CustomTabPanel>
        </Box>
      </Box>
    </AppLayout>
  );
};
