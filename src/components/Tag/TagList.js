import React, { useEffect, useCallback } from "react";
import produce from "immer";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";

const makeTagList = (tags, hasMainShow, isSelectable, isShowFollow, isContraction, toggleTag) => {
  if (!tags.length) return <div className="non-tag">아직 등록된 태그가 없습니다</div>;
  if (!tags.length && hasMainShow) return <div className="main-non-tag">태그가 없습니다. 카페를 이용한 후 평가를 남겨주세요.</div>;
  if (isContraction) tags = tags.filter((v, i) => i < 2);

  return tags?.map((tag, i) => {
    return (
      <div className="tag_wrapper" key={i}>
        <Tag tag={tag} isShowFollow={isShowFollow} isSelectable={isSelectable} isSelected={tag.isSelected} onClick={isSelectable && (() => toggleTag(i))} />
      </div>
    );
  });
};

const TagList = ({ tags, onSetTags, hasMainShow, isContraction, isShowFollow, isSelectable, onTagsChanged }) => {
  /* prettier-ignore */
  const toggleTag = useCallback(index => {
    if(!onSetTags) return;
    onSetTags(prevTags => produce(prevTags, draft => {
				draft[index].isSelected = !draft[index].isSelected;
		}));
  }, [onSetTags]);

  useEffect(() => {
    onTagsChanged && onTagsChanged();
  }, [onTagsChanged]);

  return (
    <TagListStyled>
      {makeTagList(tags, hasMainShow, isSelectable, isShowFollow, isContraction, toggleTag)}
      {tags.length > 2 && isContraction && <span className="more-tag-length">+{tags.length - 2}</span>}
    </TagListStyled>
  );
};

TagList.defaultProps = {
  isContraction: false,
  isSelectable: false,
  isShowFollow: true,
  hasMainShow: true,
  tags: [
    { iconName: "concent", text: "콘센트가 있는", isSelected: false },
    { iconName: "mute", text: "분위기가 조용한", isSelected: false },
    { iconName: "wifi", text: "와이파이가 빠른", isSelected: false },
    { iconName: "parking", text: "주차장이 있는", isSelected: false },
    { iconName: "dessert", text: "디저트가 다양한", isSelected: false },
    { iconName: "study", text: "스터디룸이 있는", isSelected: false },
    { iconName: "toilet", text: "화장실이 깨끗한", isSelected: false },
    { iconName: "twentyFour", text: "24시간 열린", isSelected: false },
    { iconName: "smoking", text: "흡연구역이 마련된", isSelected: false },
    { iconName: "timer", text: "시간제한이 있는", isSelected: false },
    { iconName: "seat", text: "빈자리가 많은", isSelected: false },
    { iconName: "chair", text: "의자가 푹신한", isSelected: false },
  ],
  onSetTags: null,
  onTagsChanged: null,
};

export default TagList;
