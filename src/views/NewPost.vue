<template>
  <div class="wrapper overflow-auto">
    <div class="main">
      <div class="section profile-content">
        <div class="container">
          <div class="d-flex justify-content-between">
            <h3 class="ml-3">Tạo bài viết</h3>
            <div class="d-flex align-items-center">
              <md-button class="md-success">Lưu</md-button>
            </div>
          </div>
          <div class="md-layout m-3">
            <md-field class="md-form-group">
              <md-icon>title</md-icon>
              <label>Tiêu đề bài viết</label>
              <md-input v-model="title"></md-input>
            </md-field>
            <md-field class="md-form-group mt-3">
              <md-icon class="mr-2">description</md-icon>
              <label v-if="!description" class="ml-2">Tóm tắt bài viết</label>
              <textarea
                v-model="description"
                class="md-form-group form-control"
                id="post-description"
                rows="3"
              ></textarea>
            </md-field>
            <ckeditor
              :editor="editor"
              v-model="editorData"
              :config="editorConfig"
            ></ckeditor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        removePlugins: ["ImageUpload"]
      },
      description: "",
      title: ""
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 70px;
  min-height: calc(100vh - 154px);
}
.profile-content {
  padding-top: 20px;
}
</style>
