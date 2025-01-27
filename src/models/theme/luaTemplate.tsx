export const exportLua = (name, colors, groups) => {
  /*
    const colors = this.colors;
    const groups = {
      ...this.editor,
      ...this.syntax,
      ...this.lsp,
      ...this.git,
      ...this.treesitter,
      // Add any other groups you want to include
    };
    */

  const luaTheme = `
local M = {}

local colors = {
${Object.entries(colors)
  .map(([key, value]) => `  ${key} = "${value}",`)
  .join("\n")}
}

local groups = {
${Object.entries(groups)
  .map(([groupName, settings]) => {
    const fg = "fg" in settings ? `fg = ${settings.fg}` : "";
    const bg = "bg" in settings ? `bg = ${settings.bg}` : "";
    const sp = "sp" in settings ? `sp = ${settings.sp}` : "";
    const otherAttributes = Object.entries(settings)
      .filter(([key]) => !["fg", "bg", "sp"].includes(key))
      .map(([key, value]) => `${key} = ${value}`)
      .join(", ");

    const groupValues = [fg, bg, sp, otherAttributes]
      .filter((value) => {
        return value !== "";
      })
      .join(", ");
    return `  ${groupName} = { ${groupValues} },`;
  })
  .join("\n")}
}

function M.setup()
    vim.cmd("highlight clear")
    if vim.fn.exists("syntax_on") then
        vim.cmd("syntax reset")
    end

    vim.g.colors_name = "${name}"

    for group, settings in pairs(groups) do
        vim.api.nvim_set_hl(0, group, settings)
    end

    vim.defer_fn(function()
      for group, settings in pairs(groups) do
          vim.api.nvim_set_hl(0, group, settings)
      end
    end, 100)
end

return M
`;

  return luaTheme.trim();
};
