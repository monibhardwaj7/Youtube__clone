import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

function Videos({ videos, direction, md }) {
  if (!videos?.length) return "Loading...";
  console.log(md);
  return (
    <Stack
      direction={direction || "row"}
      justifyContent="start"
      flexWrap="wrap"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} md={md} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
