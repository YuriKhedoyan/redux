"use client";
import React, { useState } from "react";
import Header from "../../section/header";
import AppsIcon from "@mui/icons-material/Apps";
import TuneIcon from '@mui/icons-material/Tune';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from "@mui/icons-material/Settings";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { createEntityAdapter, createSlice, configureStore, } from '@reduxjs/toolkit'
import { Grid, Container, Typography, CardMedia, CardContent, Card, Tab, Tabs, Box } from "@mui/material"

import Img from "../../compontents/img"
import images from "../../locales/images.js";

import "./Main.scss"

export default function Main() {
  const [index, setIndex] = useState(1);
  const { hyperPCCsGo, pc, services } = images;

  const handleChange = index => setIndex(index);
 
  return (
    <>
      <Header></Header>
      <Img src={hyperPCCsGo.src} alt={hyperPCCsGo.alt} />
      <section id="sc1">
        <Container>
          <Grid>
            <Grid item xs={2}>
              <AppsIcon />
              <h3>All Models</h3>
            </Grid>
            <Grid item xs={2}>
              <PersonalVideoIcon />
              <h3>PC In Stock</h3>
            </Grid>
            <Grid item xs={2}>
              <SettingsIcon />
              <h3>Settings</h3>
            </Grid>
            <Grid item xs={2}>
              <TuneIcon />
              <h3>Selection </h3>
            </Grid>
            <Grid item xs={2}>
              <FormatListBulletedIcon />
              <h3>Comparison</h3>
            </Grid>
            <Grid item xs={2}>
              <RefreshIcon />
              <h3>Trade-in</h3>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="sc2">
        <h3>We create computers that will give gamers and creative professionals a pleasure to use.</h3>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={3} className="grid">
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[0].src}
                  alt={pc[0].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>Gaming PC</h3>
                    <h5>The Best Gaming Pc by HyperPC</h5>
                  </Typography>
                  <Typography variant="body2" color="text.#111111">
                    From 1200$
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} className="grid">
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[1].src}
                  alt={pc[1].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>Workstations</h3>
                    <h5>Professional solutions for work and creativity</h5>
                  </Typography>
                  <Typography variant="body2" color="text.#111111">
                    From 1200$
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} className="grid">
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[2].src}
                  alt={pc[2].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>Computer Concepts</h3>
                    <h5>Exclusive solutions with custom cooling</h5>
                  </Typography>
                  <Typography variant="body2" color="text.#111111">
                    From 1200$
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} className="grid">
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[3].src}
                  alt={pc[3].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>PC configurator</h3>
                    <h5>Create your dream computer in the configurator</h5>
                  </Typography>
                  <Typography variant="body2" color="text.#111111">
                    From 1200$
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="sc3">
        <p className="line"></p>
        <Container>
          <h3>HYPERPC stands for amazing design, high performance, impeccable quality and personal service.</h3>
          <Grid container spacing={6} className="grid">
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[4].src}
                  alt={pc[4].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>PLAY 17</h3>
                    <h5>Take Game With You</h5>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} >
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[5].src}
                  alt={pc[5].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>LUMEN</h3>
                    <h5>Reinventing the standard</h5>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[6].src}
                  alt={pc[6].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>CYBER</h3>
                    <h5>Computer of the future</h5>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[7].src}
                  alt={pc[7].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>DYNAMIC</h3>
                    <h5>Strength Superiority</h5>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} >
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[8].src}
                  alt={pc[8].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>STATION</h3>
                    <h5>Game Station</h5>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} >
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  sx={{ height: 350 }}
                  image={pc[9].src}
                  alt={pc[9].alt}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>GENESIS</h3>
                    <h5>Innate Superiority</h5>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="sc4">
        <Tabs value={index} onChange={handleChange} centered>
          <Tab label="For Games" onChange={e => handleChange(2)} style={{ color: "white" }} />
          <Tab label="For Work" onChange={e => handleChange(1)} style={{ color: "white" }} />
        </Tabs>
        {index !== 1 ? <>
          <Container maxWidth="xl">
            <Grid container spacing={4} className="grid">
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[10].src}
                    alt={pc[10].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>Palit GeForce RTX 4060 Ti Dual</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i5-13400</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO B760-P</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>1TB WD Black SN770</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>16GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[11].src}
                    alt={pc[11].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>Palit GeForce RTX 4060 Ti Dual</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i5-13400</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO B760-P</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>1TB WD Black SN770</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>16GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[12].src}
                    alt={pc[12].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>Palit GeForce RTX 4060 Ti Dual</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i5-13500</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO B760-P</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>2TB Samsung 970 EVO Plus</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>32GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[13].src}
                    alt={pc[13].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>MSI GeForce RTX 4070 GAMING</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i5-13500</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO B760-P</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>1TB WD Black SN770</h6>
                          <h6>512GB ADATA SX6000PRO</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>32GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </> : <>
          <Container maxWidth="xl">
            <Grid container spacing={4} className="grid">
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[14].src}
                    alt={pc[14].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>MSI GeForce RTX 4070 Ti GAMING</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i7-13700K</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO Z790-A</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>1TB WD Black SN770</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>32GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[15].src}
                    alt={pc[15].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>MSI GeForce RTX 4070 Ti GAMING</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i7-13700</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO Z790-A</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>2TB Samsung 990 PRO</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>32GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[14].src}
                    alt={pc[14].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>Palit GeForce RTX 4060 Ti Dual</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i5-13500</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO B760-P</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>2TB Samsung 970 EVO Plus</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>32GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 350 }}
                    image={pc[14].src}
                    alt={pc[14].alt}
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path><path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path><rect x="4" y="17" width="7" height="1"></rect><rect x="4" y="7" width="1" height="5"></rect><rect x="8" y="7" width="1" height="5"></rect></svg></span>
                        <span className="texts">
                          <h3>GPU</h3>
                          <h6>MSI GeForce RTX 4070 GAMING</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="18" y="14" width="2" height="1"></rect><rect x="18" y="11" width="2" height="1"></rect><rect x="18" y="8" width="2" height="1"></rect><rect x="18" y="5" width="2" height="1"></rect><rect y="14" width="2" height="1"></rect><rect y="11" width="2" height="1"></rect><rect y="8" width="2" height="1"></rect><rect y="5" width="2" height="1"></rect><rect x="5" y="18" width="1" height="2"></rect><rect x="8" y="18" width="1" height="2"></rect><rect x="11" y="18" width="1" height="2"></rect><rect x="14" y="18" width="1" height="2"></rect><rect x="5" width="1" height="2"></rect><rect x="8" width="1" height="2"></rect><rect x="11" width="1" height="2"></rect><rect x="14" width="1" height="2"></rect><path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path><path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path></svg></span>
                        <span className="texts">
                          <h3>CPU</h3>
                          <h6>Intel® Core™ i5-13500</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect y="2" width="1" height="9"></rect><rect x="15" y="3" width="1" height="7"></rect><rect x="7" y="15" width="9" height="1"></rect><rect x="7" y="12" width="9" height="1"></rect><path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path><path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path></svg></span>
                        <span className="texts">
                          <h3>Motherboard</h3>
                          <h6>MSI PRO B760-P</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path><rect x="6" y="9" width="3" height="1"></rect><rect x="6" y="12" width="3" height="1"></rect><rect x="6" y="15" width="3" height="1"></rect><rect x="11" y="9" width="3" height="1"></rect><rect x="11" y="12" width="3" height="1"></rect><rect x="11" y="15" width="3" height="1"></rect></svg></span>
                        <span className="texts">
                          <h3>SSD</h3>
                          <h6>1TB WD Black SN770</h6>
                          <h6>512GB ADATA SX6000PRO</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path><rect x="2" y="17" width="16" height="1"></rect><rect x="3" y="7" width="2" height="4"></rect><rect x="7" y="7" width="2" height="4"></rect><rect x="15" y="7" width="2" height="4"></rect><rect x="11" y="7" width="2" height="4"></rect></svg></span>
                        <span className="texts">
                          <h3>OZU</h3>
                          <h6>32GB Kingston Fury Beast RGB</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path><polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon></svg></span>
                        <span className="texts">
                          <h3>Power Unit</h3>
                          <h6>850W Phanteks AMP</h6>
                        </span>
                      </div>
                      <p className="line"></p>
                      <div className="equipment">
                        <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1,2V19H18V2Zm16,8H10V3h7ZM9,3v7H2V3ZM2,11H9v7H2Zm8,7V11h7v7Z"></path></svg></span>
                        <span className="texts">
                          <h3>Operation System</h3>
                          <h6>Microsoft Windows 11 Home OEM</h6>
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>}
      </section>
      <section id="sc5">
        <Container maxWidth="xxl">
          <h3>SERVICES</h3>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Img src={services.upgradeCenter.src} alt={services.upgradeCenter.alt} className="services" />
              <h3>{services.upgradeCenter.alt}</h3>
            </Grid>
            <Grid item xs={3}>
              <Img src={services.fixProblems.src} alt={services.fixProblems.alt} className="services" />
              <h3>{services.fixProblems.alt}</h3>
            </Grid>
            <Grid item xs={3}>
              <Img src={services.modding.src} alt={services.modding.alt} className="services" />
              <h3>{services.modding.alt}</h3>
            </Grid>
            <Grid item xs={3}>
              <Img src={services.tradeIn.src} alt={services.tradeIn.alt} className="services" />
              <h3>{services.tradeIn.alt}</h3>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="sc6">
        <Container>
          <h4>HYPERPC world</h4>
          <h2>Why We ?</h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Img src={services.upgradeCenter.src} alt={services.upgradeCenter.alt} />
            </Grid>
            <Grid item xs={6}>
              <Box className="box">
                <h3>What makes us the first for 14 years</h3>
                <ul>
                  <span>
                    <li></li><p>Official partners of NVIDIA, Intel and Microsoft</p>
                  </span>
                  <span>
                    <li></li><p>The most advanced online computer configurator</p>
                  </span>
                  <span>
                    <li></li><p>Only the best components and advanced technologies</p>
                  </span>
                  <span>
                    <li></li><p>Professional assembly and customization</p>
                  </span>
                  <span>
                    <li></li><p>Special stress testing and software installation</p>
                  </span>
                  <span>
                    <li></li><p>Delivery, installation and turnkey computer setup</p>
                  </span>
                  <span>
                    <li></li><p>Own production</p>
                  </span>
                  <span>
                    <li></li><p>Showroom in California with computers available</p>
                  </span>
                  <span>
                    <li></li><p>Service centers in more than 40 major USA cities.</p>
                  </span>
                </ul>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={6} className="grid">
            <Grid item xs={2.4} className="advantages">
              <Box>
                <h2>14 Years</h2>
                <p>For 14 years we have grown into a leader in the gaming computer market</p>
              </Box>
            </Grid>
            <Grid item xs={2.4} className="advantages">
              <Box>
                <h2>50000 PC</h2>
                <p>We have produced over 50,000 gaming computers for our customers</p>
              </Box>
            </Grid>
            <Grid item xs={2.4} className="advantages">
              <Box>
                <h2>32 Esports</h2>
                <p>Held 32 esports tournaments with the technical support of HYPERPC</p>
              </Box>
            </Grid>
            <Grid item xs={2.4} className="advantages">
              <Box>
                <h2>70 Bloggers</h2>
                <p>Top 70 YouTube bloggers and streamers chose the HYPERPC computer</p>
              </Box>
            </Grid>
            <Grid item xs={2.4} className="advantages">
              <Box>
                <h2>60 Clubs</h2>
                <p>Equipped 60 computer clubs on a turnkey basis, there is a leasing program</p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="sc7">
        <Container>
          <h3> Our Products </h3>
          <Grid container spacing={3}>
              {pc.map(picture => (
                <Grid item xs={4} key={picture.id}>
                  <Img src={picture.src} className="photos" alt={picture.alt} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}
