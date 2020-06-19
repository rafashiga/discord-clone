import styled from 'styled-components';
import { rem } from 'polished';

/**
 * SL - Server list
 * SN - Server name
 * CI - Channel Info
 * CL - Channel list
 * CD - Channel data
 * UL - User list
 * UI - User info
 */

export const Grid = styled.div`
  display: grid;

  grid-template-columns: ${rem('71px')} ${rem('240px')} auto ${rem('240px')};
  grid-template-rows: ${rem('46px')} auto ${rem('52px')};
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100vh;
`;
