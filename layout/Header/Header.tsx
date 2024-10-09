/* eslint-disable no-console */

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

const drawerWidth = 240;

export default function Header() {
  const navItems = [
    {
      name: "Clinical studies",
      route: "javascript:void(0)"
    },
    {
      name: "The science",
      route: "javascript:void(0)"
    },
    {
      name: "Shop",
      route: "javascript:void(0)"
    },
    {
      name: "Contact us",
      route: "javascript:void(0)"
    }
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const headerElRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      headerElRef.current?.classList?.toggle(
        "siteHeader_shrinked",
        document.documentElement.scrollTop > 100
      );
    });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const onClickContactUsButton = React.useCallback(() => {
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth"
    });
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item?.route} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="Navbar__mainWrapper">
        <HeaderWrap
          sx={{ display: "flex" }}
          className="main_head"
          ref={headerElRef}
        >
          <AppBar
            component="nav"
            position="static"
            elevation={0}
            className="headerContainer"
          >
            <Container fixed>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Link href="/" className="headerLogo">
                  <Image src={assest.logo} width={240} height={64} alt="Logo" />
                </Link>
                {isLoggedIn ? (
                  <Box
                    sx={{ display: { xs: "none", sm: "block" } }}
                    className="navbar"
                  >
                    <CustomButtonPrimary
                      onClick={handleLogout}
                      type="button"
                      variant="contained"
                      color="primary"
                    >
                      <span>Logout</span>
                    </CustomButtonPrimary>

                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="primary"
                    >
                      <span>{userData?.email}</span>
                    </CustomButtonPrimary>
                  </Box>
                ) : (
                  <Box
                    sx={{ display: { xs: "none", sm: "block" } }}
                    className="navbar"
                  >
                    {/* {navItems.map((item) => (
                  <Link
                    href={item?.route}
                    key={item?.route}
                    className={router.pathname === item.route ? "active" : ""}
                  >
                    {item?.name}
                  </Link>
                ))} */}
                  </Box>
                )}
                <Box className="hdr_rgt">
                  <Button className="hdrmanu_btn">
                    <Typography variant="body1" className="btn_line top" />
                    <Typography variant="body1" className="btn_line bottom" />
                  </Button>
                  {/* <CustomButtonPrimary
                variant="contained"
                color="primary"
                className="site-header__btn--cta"
              >
                <Typography variant="body1" className="default-text">
                  Contact Us
                </Typography>
                <Typography variant="body1" className="hovered-text">
                  Don&apos;t be shy
                </Typography>
                Contact us
              </CustomButtonPrimary> */}
                  <Button
                    className="site-header__btn--cta"
                    onClick={onClickContactUsButton}
                  >
                    <Typography variant="body1" className="default-text">
                      Contact Us
                    </Typography>
                    <Typography variant="body1" className="hovered-text">
                      Don&apos;t be shy
                    </Typography>
                    <Box className="shape-box">
                      <EastIcon />
                    </Box>
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth
                }
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Toolbar />
        </HeaderWrap>
      </div>
      <HeaderMobileView />
    </>
  );
}

const HeaderMobileView = () => {
  return (
    <>
      <div className="navBar__mobileMainWrapper">
        <div className="navBar__mobileWrapper">
          <div>
            <Link href="/" className="headerLogos">
              <Image src={assest.logo} width={160} height={70} alt="Logo" />
            </Link>
          </div>
          <div>
            <button className="mobile__MenuBTN">
              <div className="mobile__menuLine lineFirst" />
              <div className="mobile__menuLine lineSecond" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
