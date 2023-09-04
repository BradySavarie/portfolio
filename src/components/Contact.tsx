import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import SectionHeading from './styles/SectionHeading.styled';
import linkedInIcon__light from '../assets/linkedInIcon__light.svg';
import linkedInIcon__dark from '../assets/linkedInIcon__dark.svg';
import githubIcon__light from '../assets/githubIcon__light.svg';
import githubIcon__dark from '../assets/githubIcon__dark.svg';
import { useThemeContext } from '../theme/ThemeContextProvider';
import mailIcon__light from '../assets/mailIcon___light.svg';
import phoneIcon__light from '../assets/phoneIcon__light.svg';
import copyIcon__light from '../assets/copyIcon__light.svg';
import mailIcon__dark from '../assets/mailIcon__dark.svg';
import phoneIcon__dark from '../assets/phoneIcon__dark.svg';
import copyIcon__dark from '../assets/copyIcon__dark.svg';

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useThemeContext();
  const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  async function copyToClipboard(input: string) {
    const email = 'brady.savarie@hotmail.com';
    const phoneNumber = '705 207 4408';

    try {
      await navigator.clipboard.writeText(
        input === 'email' ? email : phoneNumber
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      setIsCopied(false);
    }
  }

  return (
    <section id="contact">
      <Box
        sx={{
          width: '100vw',
          bgcolor: 'secondary.main',
          paddingY: 12,
          paddingX: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            flex: 1,
            paddingX: isMediumBreakpoint ? 0 : 4,
          }}
        >
          <Stack direction="column" spacing={6}>
            <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
              <SectionHeading>
                <Typography variant="body2">Contact</Typography>
              </SectionHeading>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  maxWidth: isMediumBreakpoint ? null : 'sm',
                }}
              >
                What&apos;s next? Don&apos;t hesitate to get in touch if
                you&apos;re seeking a developer, have questions, or just want to
                connect.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
              <Stack
                direction="row"
                spacing={3}
                sx={{ justifyContent: 'center' }}
              >
                <img
                  src={
                    theme.palette.mode === 'light'
                      ? mailIcon__light
                      : mailIcon__dark
                  }
                  alt="Mail Icon"
                  height="32px"
                />
                <Typography variant={isMediumBreakpoint ? 'subtitle1' : 'h2'}>
                  brady.savarie@hotmail.com
                </Typography>
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => copyToClipboard('email')}
                >
                  <img
                    src={
                      theme.palette.mode === 'light'
                        ? copyIcon__light
                        : copyIcon__dark
                    }
                    alt="Copy Icon"
                    height="44px"
                  />
                </IconButton>
              </Stack>
              <Stack
                direction="row"
                spacing={3}
                sx={{ justifyContent: 'center' }}
              >
                <img
                  src={
                    theme.palette.mode === 'light'
                      ? phoneIcon__light
                      : phoneIcon__dark
                  }
                  alt="Phone Icon"
                  height="32px"
                />
                <Typography
                  variant={isMediumBreakpoint ? 'subtitle1' : 'h2'}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  1 (705) 207 4408
                </Typography>
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => copyToClipboard('phoneNumber')}
                >
                  <img
                    src={
                      theme.palette.mode === 'light'
                        ? copyIcon__light
                        : copyIcon__dark
                    }
                    alt="Copy Icon"
                    height="44px"
                  />
                </IconButton>
              </Stack>
              {isCopied && (
                <Stack direction="row" spacing={2}>
                  <Typography variant="body2">Copied Successfully</Typography>
                  <DoneIcon />
                </Stack>
              )}
            </Stack>

            <Stack direction="column" spacing={1} sx={{ alignItems: 'center' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: 'nowrap' }}
              >
                You can also find me on these platforms!
              </Typography>
              <Stack direction="row">
                <Link
                  href="https://github.com/BradySavarie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton sx={{ margin: 0 }}>
                    <img
                      src={
                        theme.palette.mode === 'light'
                          ? githubIcon__light
                          : githubIcon__dark
                      }
                      alt="githubLogo"
                    />
                  </IconButton>
                </Link>
                <IconButton sx={{ margin: 0 }}>
                  <img
                    src={
                      theme.palette.mode === 'light'
                        ? linkedInIcon__light
                        : linkedInIcon__dark
                    }
                    alt="linkedIn Logo"
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </section>
  );
}
