// src/components/TopMenu.tsx
import { useCart } from "../context/useCart";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Navbar, Nav } from 'rsuite';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import 'rsuite/dist/rsuite.min.css';
import {CartDrawer} from "./CartDrawer.tsx";
import {useState} from "react";

const TopMenu = () => {
    const { cart } = useCart();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    return (
        <Navbar>
            <Flex alignItems="center" justifyContent="space-between" width="100%">
                <Navbar.Brand>
                    <Text fontSize="l">E-Commerce</Text>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>Home</Nav.Item>
                    <Nav.Item>
                        <Link as={RouterLink} to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            Product
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link as={RouterLink} to="/checkout" style={{ textDecoration: 'none', color: 'black' }}>
                            Checkout
                        </Link>
                    </Nav.Item>
                    <Nav.Menu title="About">
                        <Nav.Item>Company</Nav.Item>
                        <Nav.Item>Team</Nav.Item>
                        <Nav.Menu title="Contact">
                            <Nav.Item>Via email</Nav.Item>
                            <Nav.Item>Via telephone</Nav.Item>
                        </Nav.Menu>
                    </Nav.Menu>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<FolderFillIcon />} onClick={handleDrawerOpen}>
                        Cart Items: {cart.length}
                    </Nav.Item>
                </Nav>
            </Flex>
            <CartDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
        </Navbar>

    );
};

export default TopMenu;