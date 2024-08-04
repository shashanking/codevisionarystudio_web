/* eslint-disable react/no-array-index-key */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import { earth_orbiter, montserrat } from "@/themes/_muiTheme";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CustomSelect from "@/ui/Filter/CustomSelect";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";

const FooterWrap = styled(Box)`
  background: linear-gradient(#e44f58, #bf242d, #5f0006);
  box-shadow: 0 -4px 8px rgba(137, 226, 255, 0.2);
  border-radius: 60px 60px 0 0;
  .ftr_top {
    padding: 80px 0 106px;
    h2 {
      color: ${primaryColors.textPrimaryColor};
      margin-bottom: 40px;
    }
    .submit_btn {
      width: 100%;
      padding: 24px 24px;
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
      border-radius: 69px;
      margin-top: 80px;
      text-transform: uppercase;
      &:hover {
        color: ${primaryColors.black};
      }
    }
  }
  .ftrMid_row {
    margin-bottom: 60px;
    .ftrLft_col {
      padding-right: 125px;
      .ftr_logo {
        display: inline-block;
        max-width: 240px;
        margin-bottom: 28px;
        line-height: 1;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 20px;
        font-weight: 400;
        color: ${primaryColors.white};
        font-family: ${montserrat.style.fontFamily};
      }
    }
    .ftrRgt_row {
      display: flex;
      flex-wrap: wrap;
      padding-left: 90px;
      .ftrRgt_col {
        width: 30%;
        &.ftrRgt_Add {
          width: 70%;
          padding-left: 90px;
        }
        .ftr_hding {
          font-size: 24px;
          font-weight: 700;
          color: ${primaryColors.white};
          line-height: 1;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        ul {
          li {
            :not(:last-child) {
              margin-bottom: 16px;
            }
            a {
              display: inline-block;
              transition: all 0.3s ease-in-out;
              font-size: 20px;
              font-weight: 400;
              color: ${primaryColors.white};
              font-family: ${montserrat.style.fontFamily};
              line-height: 1;
              text-transform: capitalize;
              &.ftr_mail {
                text-transform: none;
              }
              &:hover,
              &.active {
                color: ${primaryColors.black};
              }
            }
            p {
              font-size: 20px;
              font-weight: 400;
              color: ${primaryColors.white};
              font-family: ${montserrat.style.fontFamily};
              line-height: 1.1;
            }
          }
        }
      }
    }
  }
  .ftr_btm {
    padding-bottom: 64px;
    overflow: hidden;
    .sliding_heading {
      display: flex;
      align-items: center;
      border-top: 1px solid ${primaryColors.white};
      border-bottom: 1px solid ${primaryColors.white};
      overflow: hidden;
      .rfm-marquee-container {
        overflow-y: hidden;
      }
      .sliding_cnt {
        display: flex;
        align-items: center;
        i {
          padding-right: 56px;
          padding-left: 56px;
        }
        span {
          font-family: ${earth_orbiter.style.fontFamily};
          display: inline-block;
          -webkit-text-stroke-color: #fff;
          -webkit-text-stroke-width: 1px;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          white-space: nowrap;
          font-size: 128px;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const navItems = [
  {
    name: "home",
    route: "/"
  },
  {
    name: "About",
    route: "/about"
  },
  {
    name: "Products",
    route: "/products"
  },
  {
    name: "Package",
    route: "/package"
  },
  {
    name: "Contact",
    route: "/contact"
  }
];

const Footer = () => {
  const navItems = [
    {
      name: "About Us",
      route: "/about-us"
    },
    {
      name: "Our Services",
      route: "/about"
    },
    {
      name: "Portfolio",
      route: "/products"
    },
    {
      name: "Blogs",
      route: "/package"
    },
    {
      name: "Contact Us",
      route: "/contact"
    }
  ];
  const router = useRouter();
  return (
    <FooterWrap>
      <Container fixed>
        <Box className="ftr_top">
          <Typography variant="h2">Contact Us</Typography>

          <Box className="ftrContact_form">
            <Grid container spacing={3}>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <InputFieldCommon
                    placeholder="Your Name*"
                    required
                    type="text"
                  />
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <InputFieldCommon
                    placeholder="Email ID*"
                    required
                    type="email"
                  />
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <InputFieldCommon
                    placeholder="Phone Number"
                    required
                    type="tel"
                  />
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <CustomSelect initialValue="Subject">
                    <MenuItem value="">Subject</MenuItem>
                    <MenuItem value="Subject1">Subject1</MenuItem>
                    <MenuItem value="Subject2">Subject2</MenuItem>
                    <MenuItem value="Subject3">Subject3</MenuItem>
                  </CustomSelect>
                </Box>
              </Grid>
            </Grid>

            <CustomButtonPrimary
              color="success"
              variant="contained"
              className="submit_btn"
            >
              Submit
            </CustomButtonPrimary>
          </Box>
        </Box>

        <Grid container spacing={2} className="ftrMid_row">
          <Grid item md={6} xs={12}>
            <Box className="ftrLft_col">
              <Link href="/" className="ftr_logo">
                <Image
                  src={assest.logo}
                  alt="footerlogo"
                  width={240}
                  height={40}
                />
              </Link>

              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mollis erat ac ex bibendum, nec vulputate lorem posuere. Nunc
                mollis turpis eget nibh sollicitudin, nec semper sem facilisis.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Box className="ftrRgt_row">
              <Box className="ftrRgt_col">
                <Typography variant="body1" className="ftr_hding">
                  Menu
                </Typography>
                <List>
                  {navItems.map((item, index) => (
                    <ListItem disablePadding key={index}>
                      <Link
                        href={item.route}
                        className={
                          router.pathname === item.route ? "active" : ""
                        }
                      >
                        {item.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box className="ftrRgt_col ftrRgt_Add">
                <Typography variant="body1" className="ftr_hding">
                  Contact info
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <Link href="tel:12893521293">+1 (289) 352-1293</Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Typography variant="body1">
                      Address, Kolkata, West Bengal 700040
                    </Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link
                      href="mailto:Codevisionary@gmail.com"
                      className="ftr_mail"
                    >
                      Codevisionary@gmail.com
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className="ftr_btm">
        <Box className="sliding_heading">
          <Marquee>
            <Box className="sliding_cnt">
              <span>Code Visionary Studios</span>
              <i>
                <Image
                  src={assest.sliding_heading_icon}
                  width="53"
                  height="53"
                  alt="shape"
                />
              </i>
            </Box>
          </Marquee>
        </Box>
      </Box>
    </FooterWrap>
  );
};

export default Footer;
