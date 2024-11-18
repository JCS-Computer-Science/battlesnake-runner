import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { exec } from "node:child_process";
import { resolve } from "node:path";
import { promisify } from "util";
const execPromise = promisify(exec);

type Snake = { name: string; url: string };

const enginePath = "./src/lib/battlesnake/battlesnake.exe";

// -W 11 -H 11

const script = `${resolve(
  enginePath
)} play -W 11 -H 11 --browser --board-url http://localhost:5173`;
// )} play -W 11 -H 11 --verbose`;
// )} play -W 11 -H 11 --output out.json`;
//--name Jobin --url http://10.119.8.46:8000 --name Jobin2 --url http://10.119.8.46:8000`;

export const POST: RequestHandler = async ({ request, locals }) => {
  const { snakes }: { snakes: Array<Snake> } = await request.json();
  const players = snakes.reduce((acc, cur) => {
    return `${acc} --name ${cur.name} --url ${cur.url}`;
  }, "");

  const { stdout, stderr } = await execPromise(`${script}${players}`);
  //   return json({ message: "got called" });
  return json({ stdout, stderr });
};
