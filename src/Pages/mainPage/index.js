import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDatas, getSearcheData } from "../../Api";
import SearchAppBar from "../../Components/Header";
import ImageMasonry from "../../Components/ImageMasonry";
import Masonry from "../../Components/Masonry";
import CustomizedInputs from "../../Components/TextField";
import setNewPage from "../../Redux/actions";

export default function MainPage() {
  const [photos, setPhotos] = useState([]);
  const [indexPage, setIndexPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const data = await getDatas(indexPage);
    setPhotos(data.data.photos);
    if (data.success) setIsLoading(false);
  }, [indexPage]);

  const searchFunctionApp = () => {};

  const LoadMore = () => {
    setIsLoading(true);
    setIndexPage(indexPage + 1);
  };
  return (
    <>
      <section
        style={{
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: 600,
          backgroundImage: `url(
            "https://images.pexels.com/photos/3646932/pexels-photo-3646932.jpeg?auto=compress&crop=focalpoint&cs=tinysrgb&fit=crop&fp-y=0.4&h=500&sharp=10&w=2000"
          )`,
        }}
      >
        <SearchAppBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h2"
            sx={{
              maxWidth: 700,
              color: "white",
              fontSize: "36px",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            The best free stock photos, royalty free images and videos shared by
            creators.
          </Typography>
          <CustomizedInputs searchFunction={searchFunctionApp} />
        </Box>
      </section>
      <Container maxWidth="lg" sx={{ paddingBottom: 8, my: 2 }}>
        {isLoading ? <Masonry /> : <ImageMasonry data={photos} />}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => LoadMore()}
            sx={{
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>
    </>
  );
}
