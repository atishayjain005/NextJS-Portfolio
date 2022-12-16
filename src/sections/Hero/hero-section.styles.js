import { css } from "@emotion/react";

export const buttonOne = css`
  background: transparent;
  color: rgba(149, 9, 255, 1);
  border: solid 1px rgba(149, 9, 255, 1);
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.2s ease;
  &:hover {
    color: rgba(149, 9, 255, 1);
    opacity: 80%;
  }
`;

export const buttonTwo = css`
  padding: 13px 24px;
  background: linear-gradient(
    135deg,
    rgba(61, 0, 142, 1) 0%,
    rgba(149, 9, 255, 1) 100%
  );
  border: transparent;
  marginleft: 25px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  transition: all 0.2s ease;
  &:hover {
    color: white;
    opacity: 80%;
  }
`;
