import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Avatar, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 829,
}));

const ActionsBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: 2,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  // background: "#909090",
  opacity: 0,
  transition: "0.3s",
  // filter: "alpha(Opacity=20)",
  "div:hover > &": { opacity: 1 },
  backgroundImage:
    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3024874521456553) 52%, rgba(255,255,255,0) 100%)",
}));

const ItemBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  boxShasow: theme.shadows[20],
  overflow: "hidden",
}));

const Title = styled(Box)(({ theme }) => ({
  // background: "none",
  position: "absolute",
  top: 0,
  left: 0,
  color: "#fff",
  height: "50px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "28px",
  opacity: 0,
  transition: "0.3s",
  "div:hover > &": { opacity: 1 },
}));

function BasicTooltip({ title, icon, textColor }) {
  return (
    <Tooltip title={title}>
      <IconButton sx={{ color: `${textColor}` }}>{icon}</IconButton>
    </Tooltip>
  );
}

export default function ImageMasonry({ data }) {
  const ChangeRoute = () => {
    console.log("User");
  };
  return (
    <MainBox>
      <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={2}>
        {data.map((item, index) => (
          <ItemBox key={index} sx={{ position: "relative" }}>
            <Title onClick={ChangeRoute}>{item.photographer}</Title>
            <img
              src={
                `${item.src.landscape}?w=162&auto=format` ||
                "https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
              srcSet={`${item.src.landscape}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
            <ActionsBox>
              <a
                href={`${item.photographer_url}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  alt={`${item.photographer}`}
                  src={`{${item.photographer_url}}`}
                />
              </a>
              <Box>
                <BasicTooltip
                  title="Delete"
                  icon={<DeleteIcon sx={{ color: pink[500] }} />}
                  bgColor="red"
                />
                <BasicTooltip
                  title="Save"
                  icon={<SaveAltIcon color="success" />}
                  bgColor="green"
                />
                <BasicTooltip
                  title="Share"
                  icon={<ShareIcon color="primary" />}
                />
              </Box>
            </ActionsBox>
          </ItemBox>
        ))}
      </Masonry>
    </MainBox>
  );
}
