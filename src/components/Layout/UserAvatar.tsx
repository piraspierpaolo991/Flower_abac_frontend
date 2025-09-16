import { Avatar, Tooltip } from '@mui/material';

const UserAvatar = ({
  role,
  size = 40,
  bgColor = '#1976d2',
  textColor = '#fff',
}: {
  role: string;
  size?: number;
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <Tooltip title={role.toUpperCase()}>
      <Avatar
        sx={{
          justifySelf: 'end',
          bgcolor: bgColor,
          color: textColor,
          width: size,
          height: size,
          fontSize: size * 0.5,
          fontWeight: 'bold',
        }}
      >
        {role.charAt(0).toUpperCase()}
      </Avatar>
    </Tooltip>
  );
};

export default UserAvatar;
