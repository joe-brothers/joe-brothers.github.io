import React, { useState } from 'react';
import {AppBar, Box, Button, Container, FormControl, Grid, IconButton, InputLabel, Link, Menu, MenuItem, Select, Toolbar, Tooltip, Typography } from '@mui/material';
import {Business as BusinessIcon, Menu as MenuIcon, Facebook, LinkedIn, Twitter, GitHub, YouTube } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material/Select';

const languages: string[] = ['English', 'Korean'];
// const footerMenu: {[key: string]: string[]} = {
//   'Products': ['Lorem', 'ipsum','dolor','sit','amet','consectetur'],
//   'Solutions': ['dipisicing', 'elit','Consequuntur','facere','quaerat','magni'],
//   'Developer': ['temporibus', 'nam','laboriosam','at','repellat','eveniet'],
//   'Resources': ['iusto', 'saepe','ab','voluptatibus','nihil','rem'],
//   'Company': ['illo', 'Illum','libero','quam','totam','quisquam'],
//   'Support': ['aaaa', 'bbbb','cccc','ddd','eeee','fff'],
// };

const footerMenu: Record<string, Record<string, string>[]> = {
  Products: [
    {Lorem: 'https://joe-brothers.com'}, 
    {ipsum: 'https://joe-brothers.com'}, 
    {dolor: 'https://joe-brothers.com'}, 
    {sit: 'https://joe-brothers.com'}, 
    {agsd: 'https://joe-brothers.com'}, 
    {werq: 'https://joe-brothers.com'}, 
  ],
  Solutions: [
    {Lorem: 'https://joe-brothers.com'}, 
    {ipsum: 'https://joe-brothers.com'}, 
    {dolor: 'https://joe-brothers.com'}, 
    {sit: 'https://joe-brothers.com'}, 
    {agsd: 'https://joe-brothers.com'}, 
    {werq: 'https://joe-brothers.com'}, 
  ],
  Developer: [
    {absdf: 'https://joe-brothers.com'}, 
    {qweqtwe: 'https://joe-brothers.com'}, 
    {fghjty: 'https://joe-brothers.com'}, 
    {dfg: 'https://joe-brothers.com'}, 
    {agassd: 'https://joe-brothers.com'}, 
    {werq: 'https://joe-brothers.com'}, 
  ],
  Resources: [
    {adtr: 'https://joe-brothers.com'}, 
    {sdfas: 'https://joe-brothers.com'}, 
    {xcvs: 'https://joe-brothers.com'}, 
    {'hi hi hi hi hi hi': 'https://joe-brothers.com'}, 
    {zxzzxv: 'https://joe-brothers.com'}, 
    {werw: 'https://joe-brothers.com'}, 
  ],
  Company: [
    {agw: 'https://joe-brothers.com'}, 
    {vvvv: 'https://joe-brothers.com'}, 
    {asdf: 'https://joe-brothers.com'}, 
    {aah: 'https://joe-brothers.com'}, 
    {asdfsd: 'https://joe-brothers.com'}, 
    {eeee: 'https://joe-brothers.com'}, 
  ],
  Support: [
    {asdfs: 'https://joe-brothers.com'}, 
    {sdaf: 'https://joe-brothers.com'}, 
    {sss: 'https://joe-brothers.com'}, 
    {sit: 'https://joe-brothers.com'}, 
    {agsd: 'https://joe-brothers.com'}, 
    {aaaaaaa: 'https://joe-brothers.com'}, 
  ],
};
  // 'Solutions': ['dipisicing', 'elit','Consequuntur','facere','quaerat','magni'],
  // 'Developer': ['temporibus', 'nam','laboriosam','at','repellat','eveniet'],
  // 'Resources': ['iusto', 'saepe','ab','voluptatibus','nihil','rem'],
  // 'Company': ['illo', 'Illum','libero','quam','totam','quisquam'],
  // 'Support': ['aaaa', 'bbbb','cccc','ddd','eeee','fff'],
const links: {[key: string]: string} = {
  'Terms of Service': 'https://joe-brothers.com',
  'Privacy Policy': 'https://joe-brothers.com',
  'Cookie Settings': 'https://joe-brothers.com',
  'Sub-Processors': 'https://joe-brothers.com',
};

export const Footer = () => {
  const [language, setLanguage] = useState(languages[0]);
  const onChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
      <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'column', gap: 3, pb: 10}}>
        <Grid container columns={{xs: 2, sm: 7}}>
          <Grid item xs={2} sm={1}>
            <BusinessIcon sx={{fontSize: 70}} />
          </Grid>
          {Object.entries(footerMenu).map(([category, items]) => {
            return (
              <Grid item xs={1}>
                <Typography>{category}</Typography>
                <ul>
                  {items.map((item) => {
                    return Object.entries(item).map(([key, value]) => <li style={{wordBreak: 'break-word'}}>
                      <Link underline="none" href={value} target="_blank" sx={{"&:hover": {color: 'red'}}}>{key}</Link>
                    </li>)
                  })}
                </ul>
              </Grid>
            );
          })}
        </Grid>
        <Container disableGutters sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: 1}}>
          <Box>
            <Typography>© 2022 Joe Brothers, Inc.</Typography>
          </Box>
          <Box sx={{flexGrow: 1}}>
            <ul style={{display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none'}}>
            {Object.entries(links).map(([key, value]) => <li>
              <Link underline="none" href={value} target="_blank" sx={{"&:hover": {color: 'red'}}}>{key}</Link>
            </li>)}
            </ul>
          </Box>
          <Box>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="language-select">Language</InputLabel>
            <Select
              labelId="language-select"
              id="language-select"
              value={language}
              label="Language"
              onChange={onChangeLanguage}
            >
              {languages.map((lang) => <MenuItem key={`menuitem_${lang}`} value={lang}>{lang}</MenuItem>)}
            </Select>
          </FormControl>
          </Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
          </Box>
        </Container>
      </Container>
    );
};
