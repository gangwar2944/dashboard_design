import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export interface SideBarData {
    id: number;
    name: string;
    path: string;
    getIcon: () => JSX.Element;
}

export const sideBarData: SideBarData[] = [
    {
        id: 1,
        name: "Home",
        path: "/dashboard_design",
        getIcon: () => <HomeOutlinedIcon fontSize='small'/>
    },
    {
        id: 2,
        name: "Dashboard",
        path: "/dashboard",
        getIcon: () => <InsertChartOutlinedIcon fontSize='small'/>
    },
    {
        id: 3,
        name: "Inventory",
        path: "/inventory",
        getIcon: () => <ContentPasteOutlinedIcon fontSize='small'/>
    },
    {
        id: 4,
        name: "Balance",
        path: "/balance",
        getIcon: () => <AccountBalanceWalletOutlinedIcon fontSize='small'/>
    },
    {
        id: 5,
        name: "Shopping Bag",
        path: "/shopping",
        getIcon: () => <LocalMallOutlinedIcon fontSize='small'/>
    },
    {
        id: 6,
        name: "Logout",
        path: "/logout",
        getIcon: () => <LogoutOutlinedIcon fontSize='small'/>
    }
];
