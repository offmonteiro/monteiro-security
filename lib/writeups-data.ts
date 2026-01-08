export interface Writeup {
  title: string
  platform: "htb" | "thm" | "ctf" | "bugbounty"
  difficulty: "easy" | "medium" | "hard" | "insane"
  description: string
  tags: string[]
  date: string
  pdf: string
}

export const writeupsData: Writeup[] = [
  {
    title: "Cap",
    platform: "htb",
    difficulty: "easy",
    description:
      "Comprometimento total de servidor Linux através de falha de controle de acesso, captura de credenciais em texto claro e escalação de privilégios via capability mal configurada.",
    tags: ["Sniffing", "Enumeration", "Privilage Escalation"],
    date: "2025-12-28",
    pdf: "writeups/htb-cap.pdf",
  },
]
