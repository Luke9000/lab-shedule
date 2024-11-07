import moment from "moment";
import { EventItem } from "./types";

export const EVENTS: EventItem[] = [
    {
      start: moment("2024-11-07T10:00:00").toDate(),
      end: moment("2024-11-07T15:00:00").toDate(),
      data: {
        appointment: {
          id: 1,
          status: "P",
          location: "New York",
          resource: "Dr Alex",
          address: "Building 5\nStreet 44\nNear Express Highway\nNew York",
        },
      },
      resourceId: 1,
    },
    {
      start: moment("2024-11-07T16:25:00").toDate(),
      end: moment("2024-11-07T18:00:00").toDate(),
      data: {
        appointment: {
          id: 2,
          status: "CI",
          location: "Washington",
          resource: "Dr David",
          address: "Block 1\nStreet 32\nLong Island\nNew York",
        },
      },
      resourceId: 2,
    },
    {
      start: moment("2024-11-08T15:00:00").toDate(),
      end: moment("2024-11-08T17:00:00").toDate(),
      data: {
        blockout: {
          id: 1,
          name: "Independence Day",
        },
      },
      resourceId: 3,
    },
    {
        start: moment("2024-11-06T16:25:00").toDate(),
        end: moment("2024-11-06T17:00:00").toDate(),
        data: {
          appointment: {
            id: 2,
            status: "CI",
            location: "Washington",
            resource: "Dr David",
            address: "Block 1\nStreet 32\nLong Island\nNew York",
          },
        },
        resourceId: 4,
      },
  ];