import './Footer.css';
import {IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
    return (
        <footer className="footer">
                <Typography variant="h6" align="center" gutterBottom>
            Made with ♥ by maxidragon
                </Typography>

            <IconButton aria-label="GitHubIcon" href="https://github.com/maxidragon/" target="_blank">
                <GitHubIcon sx={{color: "#fff"}} fontSize="large"/>
            </IconButton>
            <IconButton aria-label="MailIcon" href="mailto:maksymilian.gala1@gmail.com" target="_blank">
                <MailIcon sx={{color: "#fff"}} fontSize="large"/>
            </IconButton>
        </footer>
    )
}

export default Footer;