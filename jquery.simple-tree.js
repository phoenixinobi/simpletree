/*
 * jQuery simple-tree (jquery.simple-tree.js)
 * v1.0.0
 * (c) phoenixinobi - 2014.
 * https://github.com/phoenixinobi/simpletree/
 */
 
function InitTree(tree) {
    $(tree).each(function () {
        $(this).children(".tree-branch").each(function () {
            InitBranch(this);
        });
        $(this).children(".tree-leaf").each(function () {
            InitLeaf(this);
        });
    });
}

function InitBranch(branch) {
    AttachSpacerImage(branch);
    AttachCollapseCommandImage(branch);
    BindBranchClick(branch);
    $(branch).css("cursor", "pointer");
}

function BindBranchClick(branch) {
    $(branch).click(function () {
        var command = $(this).children("img").first().attr("tree-command");
        if (command == "collapse") {
            $(this).children("img").first().remove();
            AttachExpandCommandImage(branch);
            $(this).parent().children("ul").each(function () {
                $(this).hide();
            });
        }
        else if (command == "expand") {
            $(this).children("img").first().remove();
            AttachCollapseCommandImage(branch);
            $(this).parent().children("ul").each(function () {
                $(this).show();
            });
        }
    });
}

function InitLeaf(leaf) {
    AttachSpacerImage(leaf);
    AttachLeafImage(leaf);
}

function BindLeafClick(leaf) {
    $(leaf).click(function () {

        if ($(this).text().indexOf("-") == 0) {
            $(this).text($(this).text().replace("-", "+"));
            $(this).parent().children("ul").each(function () {
                $(this).hide();
            });
        }
        else if ($(this).text().indexOf("+") == 0) {
            $(this).text($(this).text().replace("+", "-"));
            $(this).parent().children("ul").each(function () {
                $(this).show();
            });
        }
    });
}

function AttachCollapseCommandImage(branch) {
    $('<img src="@Url.Content("~/content/images/remove.png")">').load(function () {
        $(branch).prepend($(this).width(12).height(12).attr("tree-command", "collapse"));
    });
}

function AttachExpandCommandImage(branch) {
    $('<img src="@Url.Content("~/content/images/add_new.png")">').load(function () {
        $(branch).prepend($(this).width(12).height(12).attr("tree-command", "expand"));
    });
}

function AttachLeafImage(leaf) {
    $('<img src="@Url.Content("~/content/images/report.png")">').load(function () {
        $(leaf).prepend($(this).width(24).height(24));
    });
}

function AttachSpacerImage(node) {
    $('<img src="@Url.Content("~/content/images/spacer.png")">').load(function () {
        $(node).prepend($(this).width(12).height(24));
    });
}
