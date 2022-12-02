<template>
    <div class="pagination">
        <button @click="$emit('changePage', pageNo - 1)">上一页</button>
        <button v-show="startPageAndEndPage.start != 1" @click="$emit('changePage',1)">1</button>
        <button v-show="startPageAndEndPage.start > 2">···</button>

        <button
            v-for="(page, index) of startPageAndEndPage.end"
            v-show="page >= startPageAndEndPage.start"
            @click="$emit('changePage',page)"
            :class="{active: page == pageNo}"
        >
            {{ page }}
        </button>

        <button v-show="startPageAndEndPage.end < totalPage - 1">···</button>
        <button v-show="startPageAndEndPage.end != totalPage" @click="$emit('changePage',totalPage)">
            {{ totalPage }}
        </button>
        <button @click="$emit('changePage',pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["pageSize", "pageNo", "continues", "total"],
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        startPageAndEndPage() {
            let start = 0,
                end = 0;
            let num = parseInt(this.continues / 2);
            if (this.continues > this.totalPage) {
                start = 1;
                end = this.totalPage;
            } else {
                start = this.pageNo - num;
                end = this.pageNo + num;
                if (start < 1) {
                    start = 1;
                    end = this.continues;
                }
                if (end > this.totalPage) {
                    start = this.totalPage - this.continues + 1;
                    end = this.totalPage;
                }
            }
            return {start , end};
        },
    },
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>