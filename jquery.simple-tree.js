/*
 * jQuery simple-tree (jquery.simple-tree.js)
 * v1.0.0
 * (c) phoenixinobi - 2014.
 * https://github.com/phoenixinobi/simpletree/
 */

function InitTree(tree) {
    $(tree).each(function () {
        $(tree).parents("ul").css("padding-left", "20px").css("padding-top", "2px").css("padding-bottom", "2px");
        $(this).children(".tree-branch").each(function () {
            InitBranch(this);
        });
        $(this).children(".tree-leaf").each(function () {
            InitLeaf(this);
        });
    });
}

function CollapseBranch(branch) {
    $(branch).children("img").first().remove();
    AttachExpandCommandImage(branch);
    $(branch).parent().children("ul").each(function () {
        $(this).hide();
    });
}

function ExpandBranch(branch) {
    $(branch).children("img").first().remove();
    AttachCollapseCommandImage(branch);
    $(branch).parent().children("ul").each(function () {
        $(this).show();
    });
}

function InitBranch(branch) {
    AttachSpacerImage(branch);
    CollapseBranch(branch);
    BindBranchClick(branch);
    $(branch).css("cursor", "pointer");
}

function BindBranchClick(branch) {
    $(branch).click(function () {
        var command = $(this).children("img").first().attr("tree-command");
        if (command == "collapse") {
            CollapseBranch(this);
        }
        else if (command == "expand") {
            ExpandBranch(this);
        }
    });
}

function InitLeaf(leaf) {
    AttachSpacerImage(leaf);
    AttachLeafImage(leaf);
}

function AttachCollapseCommandImage(branch) {
    $('<img src="../content/images/remove.png">').load(function () {
        $(branch).prepend($(this).width(12).height(12).attr("tree-command", "collapse"));
    });
}

function AttachExpandCommandImage(branch) {
    $('<img src="../content/images/add_new.png">').load(function () {
        $(branch).prepend($(this).width(12).height(12).attr("tree-command", "expand"));
    });
}

function AttachLeafImage(leaf) {
    $('<img src="../content/images/report.png">').load(function () {
        $(leaf).prepend($(this).width(20).height(16));
    });
}

function AttachSpacerImage(node) {
    $('<img src="../content/images/spacer.png">').load(function () {
        $(node).prepend($(this).width(10).height(16));
    });
}
