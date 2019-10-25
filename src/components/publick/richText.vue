<template>
  <div id="richText" class="tinymce-editor">
    <editor v-model="myValue"
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
    </editor>
  </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver'
    // 编辑器插件plugins
    // 更多插件参考：https://www.tiny.cloud/docs/plugins/
    import 'tinymce/plugins/image'// 插入上传图片插件
    import 'tinymce/plugins/media'// 插入视频插件
    import 'tinymce/plugins/table'// 插入表格插件
    import 'tinymce/plugins/lists'// 列表插件
    import 'tinymce/plugins/wordcount'// 字数统计插件
    export default {
        name: "richText",
        components: {
            Editor
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
            // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
            baseUrl: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            plugins: {
                type: [String, Array],
                default: 'lists image media table wordcount'
            },
            toolbar: {
                type: [String, Array],
                default: 'searchreplace|bold|italic|underline|strikethrough|alignleft|aligncenter|alignright|outdent|indent|blockquote|undo|redo|removeformat|subscript|superscript|code|codesample,|hr|bullist|numlist|link|image|charmap|preview|anchor|pagebreak|insertdatetime|media|table|emoticons|forecolor|backcolor|fullscreen'
            }
        },
        data() {
            return {
                init: {
                    language_url: "../../../static/utils/tinymce/langs/zh_CN.js",
                    language: 'zh_CN',
                    skin_url: "../../../static/utils/tinymce/skins/ui/oxide",
                    content_css: "../../../static/utils/tinymce/skins/content/default/content.css",
                    min_height: 600,
                    plugins: this.plugins,
                    toolbar1: 'Edit undo redo | cut copy paste | selectall | searchreplace |  Insert image link media template codesample inserttable | forecolor backcolor | removeformat|subscript superscript|bullist numlist|link unlink openlink|charmap|fullscreen',
                    toolbar2: 'styleselect|View code visualaid visualchars visualblocks|Format bold italic underline strikethrough superscript subscript codeformat  | spellchecker | preview fullscreen| formats blockformats fontformats fontsizes align  | Table inserttable tableprops deletetable row column cell | Tools spellchecker spellcheckerlanguage | code wordcount',
                    branding: false,
                    menubar: 'file edit view insert format tools table tc help',
                    hasChange: false,
                    hasInit: false,
                    default_link_target: '_blank',
                    link_title: false,
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                    }
                },
                myValue: this.value
            }
        },
        mounted() {
            tinymce.init({})
        },
        methods: {
            //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
            //需要什么事件可以自己增加
            onClick(e) {
                this.$emit('onClick', e, tinymce)
            },
            //可以添加一些自己的自定义事件，如清空内容
            clear() {
                this.myValue = ''
            }
        },
        watch: {
            value(newValue) {
                this.myValue = newValue
            },
            myValue(newValue) {
                this.$emit('input', newValue)
            }
        }
    }
</script>

<style scoped>

</style>
