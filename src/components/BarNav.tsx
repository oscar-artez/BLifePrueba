"use client";
import { useState, ChangeEvent, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LoginModal from "./ModalLogin";
import RegisterModal from "./ModalRegister";
import Image from "next/image";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function MenuAppBar() {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [onOpenRegister, setOpenRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const handleOpenRegister = () => {
    setOpen(false);
    setOpenRegister(true);
  };
  const handleCloseModalRegister = () => setOpenRegister(false);
  const pages = ["HOME", "PRICING", "EVENTS", "COMPANY"];
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box className="w-full p-10 py-8">
      <AppBar position="static" className="bg-white shadow-none">
        <Toolbar>
          <Image
            src="/logoSphere.svg"
            alt="logoSphere"
            width={150}
            height={120}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap:25},
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                className="font-montserrat font-semibold"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#8E8E8E", display: "block", fontSize: 13, lineHeight:'16.9px',letterSpacing:'10%'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
          <Link
            href="/"
            className="px-9 py-2 rounded-full font-montserrat font-semibold "
          style={{ color:'#8E8E8E' }}
          >
            Login
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-white bg-black rounded-full font-montserrat "
            style={{textWrap:"nowrap", fontSize:'1rem'}}
          >
            Sign Up Now
            <ArrowRightAltIcon
            
            />
          </Link>
        </Toolbar>
        <LoginModal
          isOpen={open}
          onClose={handleCloseModal}
          onOpenRegister={handleOpenRegister}
        />
        <RegisterModal
          isOpen={onOpenRegister}
          onClose={handleCloseModalRegister}
        />
      </AppBar>
    </Box>
  );
}
