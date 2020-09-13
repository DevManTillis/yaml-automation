COMMAND_SCHEMA = {
          "title": "Simple Command Form Example",
          "description": "Simple Example schema",
          "type": "object",
          "required": [
            "command",
            "arguments"
          ],
          "properties": {
            "command": {
              "type": "string",
              "title": "Command",
              "default": "Enter your ansible command"
            },
            "arguments": {
              "type": "string",
              "title": "Enter your ansible arguments",
              "minLength": 10,
              "maxLength": 20
            }
          }
        }
