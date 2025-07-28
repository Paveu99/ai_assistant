'use client';

import {
    Box,
    Typography,
    useTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BugReportIcon from '@mui/icons-material/BugReport';
import TerminalIcon from '@mui/icons-material/Terminal';
import Link from 'next/link';

const walkthroughItems = [
    {
        title: 'Explain Code',
        icon: <CodeIcon color="primary" fontSize="large" />,
        href: '/explain-code',
        details: [
            'Paste any block of code into the input box.',
            'The AI analyzes syntax, semantics, and logic structure.',
            'It provides a step-by-step, human-readable explanation.',
            'Great for onboarding, documentation, or learning unfamiliar code.',
        ],
    },
    {
        title: 'Refactor',
        icon: <AutoFixHighIcon color="primary" fontSize="large" />,
        href: '/refactor-code',
        details: [
            'Paste your code with unclear names or structure.',
            'AI renames variables, methods, and splits logic into smaller units.',
            'Follows Clean Code and SOLID principles.',
            'Boosts readability, testability, and long-term maintainability.',
        ],
    },
    {
        title: 'Generate Tests',
        icon: <BugReportIcon color="primary" fontSize="large" />,
        href: '/generate-tests',
        details: [
            'Paste real application code (e.g. function, class).',
            'AI identifies input/output scenarios and edge cases.',
            'Generates unit test templates for popular frameworks like Jest or Pytest.',
            'You can then tweak and directly copy them into your project.',
        ],
    },
    {
        title: 'Commit Message AI',
        icon: <TerminalIcon color="primary" fontSize="large" />,
        href: '/generate-commit-message',
        details: [
            'Paste your staged code changes.',
            'AI detects scope, type, and intention of the changes.',
            'It generates a conventional commit message (e.g. feat: add login flow).',
            'Improves consistency, Git history readability, and collaboration.',
        ],
    },
];

export default function WalkthroughPage() {
    const theme = useTheme();

    return (
        <Box sx={{ px: 4, py: 6 }}>
            <Stack spacing={4}>
                <Typography variant="h3" fontWeight="bold">
                    Walkthrough – How each tool works
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    Discover what each tool does and how it can help you work faster, cleaner, and
                    smarter.
                </Typography>

                <Stack spacing={3}>
                    {walkthroughItems.map((item, idx) => (
                        <Accordion key={idx} elevation={3} sx={{ borderRadius: 2 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: 2,
                                    '& .MuiAccordionSummary-content': {
                                        alignItems: 'center',
                                        gap: 2,
                                    },
                                }}
                            >
                                {item.icon}
                                <Typography variant="h6" fontWeight="bold">
                                    {item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack spacing={1}>
                                    {item.details.map((point, i) => (
                                        <Typography key={i} variant="body2">
                                            {i + 1}. {point}
                                        </Typography>
                                    ))}
                                    <Link href={item.href} passHref>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                            sx={{ mt: 2, textDecoration: 'underline' }}
                                        >
                                            Try this tool →
                                        </Typography>
                                    </Link>
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
}
