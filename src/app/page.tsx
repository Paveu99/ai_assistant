'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CodeIcon from '@mui/icons-material/Code';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BugReportIcon from '@mui/icons-material/BugReport';
import TerminalIcon from '@mui/icons-material/Terminal';
import Link from 'next/link';

export default function HomePage() {
    const theme = useTheme();

    const features = [
        {
            title: 'Explain Code',
            description: 'Paste your code and get clear, AI-generated explanations in seconds.',
            icon: <CodeIcon fontSize="large" color="primary" />,
            path: '/explain-code',
        },
        {
            title: 'Refactor',
            description: 'Improve structure, naming and readability with smart suggestions.',
            icon: <AutoFixHighIcon fontSize="large" color="primary" />,
            path: '/refactor-code',
        },
        {
            title: 'Generate Tests',
            description: 'Create unit tests from real code context in any framework.',
            icon: <BugReportIcon fontSize="large" color="primary" />,
            path: '/generate-tests',
        },
        {
            title: 'Commit Message AI',
            description: 'Get concise, informative commit messages from your changes.',
            icon: <TerminalIcon fontSize="large" color="primary" />,
            path: '/generate-commit-message',
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                py: 8,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: 10,
                    }}
                >
                    <SmartToyIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        AI Developer Assistant
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Explain, refactor, test and document your code — instantly.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ borderRadius: 3, px: 5 }}
                        href="/walkthrough"
                    >
                        Try it now
                    </Button>
                </Box>
                <Grid container spacing={4}>
                    {features.map((feature, idx) => (
                        <Grid key={idx} size="grow">
                            <Link href={feature.path}>
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.background.paper,
                                        borderRadius: 4,
                                        p: 4,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: 2,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: 6,
                                            transform: 'scale(1.02)',
                                            cursor: 'pointer',
                                        },
                                        '&:active': {
                                            boxShadow: 1,
                                            transform: 'scale(0.98) translateY(2px)',
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    {feature.icon}
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{ mt: 2, mb: 1 }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
