const parseOptions = (args: string[]) => {
  let help = false;
  let recursive = false;
  let version = false;
  let path = "";

  for (const argument of args) {
    if (argument === "--help" || argument === "-h") {
      help = true;
      break;
    }

    if (argument === "--version" || argument === "-v") {
      version = true;
      break;
    }

    if (argument === "--recursive" || argument === "-r") {
      recursive = true;
    } else if (!path) {
      path = argument;
    }

    if (path && recursive) break;
  }

  if (!path) path = ".";

  const value = {
    help,
    recursive,
    version,
    path,
  };

  return value;
};

export { parseOptions };
