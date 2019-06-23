import { wifi } from './style.jsx';

export const command = 'networksetup -getairportnetwork en0 | cut -c 24-';

export const refreshFrequency = 5000; // ms

export const className = wifi;

export const render = ({ output }) => (
  <div>
    <i className="fas fa-wifi" />
    &nbsp;
    {output}
  </div>
);
