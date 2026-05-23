# HANDOFF

Maintenance notes for the ABS Astreon portfolio. This is the doc to read when
you come back to the site after a break, or when you want to do something
routine without re-deriving how it works.

Repo: github.com/absastreon/absastreon.github.io
Live: https://absastreon.github.io
Local: ~/Desktop/ABSastreon - personal portfolio
Current version: v1.9 (May 2026)

---

## Monthly routine

Run these on the first of the month, or whenever you remember. None of them
take more than a few minutes.

### 1. Back up to the external drive

Copies the whole project, including hidden files and the full git history, to
the General Backup drive. It only copies what has changed since last time, so
after the first run it is near-instant.

```bash
rsync -av --progress ~/Desktop/ABSastreon\ -\ personal\ portfolio "/Volumes/General Backup/Amish Projects/"
```

Important details:

- There is no trailing slash after `portfolio`. That is deliberate. It nests
  the project inside its own folder at
  `Amish Projects/ABSastreon - personal portfolio/`. A trailing slash would
  scatter the files loose into `Amish Projects/` alongside everything else.
- `-a` preserves permissions, timestamps, and hidden files, including `.git`.
- It copies, it does not move. Your working copy on the Desktop stays put.
- It never touches the other projects in `Amish Projects/`. rsync only acts on
  the source path you give it.

Run it with `--dry-run` first if you want to see what it will do without
writing anything:

```bash
rsync -av --dry-run ~/Desktop/ABSastreon\ -\ personal\ portfolio "/Volumes/General Backup/Amish Projects/"
```

Do not add `--delete` unless you have a specific reason. It makes the backup
mirror the source exactly, which means a wrong path could remove files. The
plain version above is the safe default.

### 2. Check the site still builds and looks right

Open the live site, hard refresh (Cmd+Shift+R), and click through the pages.
GitHub Pages is reliable, but a hard refresh catches stale cache, which has
fooled us more than once.

### 3. Glance at the parked list below

If any of the parked items has become relevant (a launch happened, FOI data
came back), pick it up. If not, leave it.

---

## How to publish a new writing post

The workflow you settled on: draft in Notion, paste into the HTML template,
git by hand. No static site generator, no Notion-as-CMS.

1. Draft the post in Notion until you are happy with the prose.
2. Copy the template:
   ```bash
   cp writing/_template.html writing/my-post-slug.html
   ```
3. Fill in every `{{ PLACEHOLDER }}`. The template comments explain each one.
4. Paste the listing-entry snippet from the bottom of `_template.html` into
   `writing/index.html`, inside `.writing-list`, newest first.
5. Bump the counter tag near the top of the list, for example `05 · Posts`.
6. Add an `<item>` block to `writing/rss.xml`, newest first.
7. Bump the footer version on the pages you touched.
8. Commit and push:
   ```bash
   git add .
   git commit -m "Add writing: <short title>"
   git push
   ```
9. Hard refresh the live site and check it.

House voice, so the new post matches the rest:

- First person, contractions welcome.
- No em dashes. Use commas, full stops, or parentheses.
- No marketing words (seamless, powerful, revolutionary, comprehensive, etc.).
- British English (organisation, colour, licence as a noun).
- Specific beats abstract. Real numbers, real names.
- Roman numerals stay as brand accents on headings and labels. Post dates use
  plain format ("April 2026"), not Roman numerals.

---

## Recurring gotchas

These have each bitten us at least once. Worth knowing in advance.

### Git auth flips to the wrong account

The Mac Keychain sometimes reverts to the `ABS-Projects-2026` org account
instead of your `absastreon` user account. When `git push` returns a 403, fix
it with:

```bash
gh auth switch
git push
```

The permanent fix is to switch the repo from HTTPS to SSH, which uses your
`~/.ssh` keys and does not drift. About five minutes of setup, and then this
stops happening. Worth doing next time it annoys you.

### Browser cache shows old content after a push

After every deploy, the browser tends to serve the cached version of a page,
which makes it look like your change did not land. Hard refresh with
Cmd+Shift+R, or open the page in a private window. If you want to confirm the
deploy is genuinely live, the raw file bypasses all caching:

```
https://raw.githubusercontent.com/absastreon/absastreon.github.io/main/about.html
```

### Trust the diff, not the summary

When an agent or a script reports "all changes applied", treat that as a claim,
not a fact. The real check is:

```bash
git diff --cached
```

If the diff does not show what you expected, the change did not happen,
regardless of what any summary says. Review the diff before every commit.

### Filenames copied from chat can carry hidden formatting

If you paste a filename from a chat message and it arrives wrapped in brackets
or link syntax, the shell cannot find it. Type filenames by hand when in doubt.

---

## Parked items

Things worth doing eventually, none urgent.

- **Bastion launch post.** The post is written and sits at
  `writing/how-i-built-bastion.html` with `noindex` on it. To publish on
  Product Hunt day: remove the noindex meta tag, add the listing entry to
  `writing/index.html`, add the RSS item, bump the counter.
- **Notion reference doc.** Out of date since around v1.4. This HANDOFF file
  now covers most of what it would have. Decide whether you still want a
  separate Notion version or whether this is the canonical reference.
- **Profile README.** Optional. A short README at `github.com/absastreon`
  (a repo named `absastreon` with a `README.md` inside) would give your GitHub
  profile a tidy index pointing to the portfolio and live products. Keep it to
  a few sentences, no badges or stats widgets.
- **FOI follow-up post.** Once the Freedom of Information requests come back,
  there is a strong post in the borough-by-borough parking data.
- **SSH for git.** The durable fix for the auth flip described above.
- **Custom OG images per post.** Polish, not essential.
- **Self-hosting fonts.** Removes the Google Fonts dependency. Low priority.

---

## Post ideas

Only the ones grounded in something specific you have or know. In rough order
of how ready they are:

- What the FOI requests told you about London bike parking (waiting on data).
- Launching Bastion on Product Hunt as one person (write it right after).
- Shipping four products in a year, and what shipping actually means.
- Notion as a second brain: what stuck after three years, what did not.
- Why you still write HTML by hand in 2026.

---

*Last reviewed: May 2026, at v1.9.*
