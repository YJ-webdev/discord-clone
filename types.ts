import { Server as ServerIO } from "socket.io";
import { NextApiResponse } from "next";

import { Member, Profile, Server } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: {
    server: {
      io: ServerIO | undefined;
    };
  };
};
