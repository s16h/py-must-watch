"""Script to generate the README.md file from the json file."""
# !PYTHONIOENCODING=UTF-8 python % > README_2.md
import json


def bold(string):
    """Add markup for bold to argument string."""
    return "**{0}**".format(string)


def link(title, url):
    """Add markup for link to arguments title/url."""
    return "[{0}]({1})".format(title, url)


def print_data(title, data):
    """Print data if provided."""
    if data is not None:
        print('    * {0}'.format(link(title, data)))


def generate_markup(json_file_path='videos.json'):
    """Generate markup for README.md using json_file_path."""
    print("""Must-watch videos about Python
=============
Inspired by {0}. Create pull requests to add more awesome links :-)""".format(link('js-must-watch', 'https://github.com/bolshchikov/js-must-watch')))

    with open(json_file_path) as json_file:
        # Get the content
        content = json.load(json_file)
        # Group it by year
        content_by_year = dict()
        for elt in content:
            content_by_year.setdefault(elt["year"], []).append(elt)
        # And print it
        for year, content in content_by_year.items():
            print('\n## {0}'.format(year))
            for elt in content:
                print('* {0}: {1} ({2})'
                      .format(
                          elt["presenter"], bold(elt["title"]), elt["venue"]))
                print_data("Presentation", elt.get("presentation"))
                print('    * Video: ' + "/".join(
                      link(name, url) for name, url in elt["videos"].items()))
                print_data("Slides", elt.get("slides"))
                print_data("Code", elt.get("code"))

if __name__ == '__main__':
    generate_markup()
