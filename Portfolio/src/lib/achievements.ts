import { v4 as uuid } from "uuid"

type Position =
  | "1st Place"
  | "2nd Place"
  | "3rd Place"
  | "Finalist"
  | "Participant"
  | "Project Pitching"
  | "Idea Pitching"
  | "Track Winners"

type Achievement = {
  id: string
  competition: string

  date: string
  organizer: string
}

export const achievements: Achievement[] = [
  {
    id: uuid(),
    competition: " Cybersecurity Foundation, Infosys Springboard",
    
    date: "July 2024",
    organizer: "Infosys",
  
  },
  {
    id: uuid(),
    competition: " Azure AI Document Intelligence, Microsoft",
    date: "May 2024",
    organizer: "Microsoft",
  
  }
]
