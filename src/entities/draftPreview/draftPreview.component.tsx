import * as styles from "./draftPreview.module.scss";
import { Checkbox, InputNumber, Select } from "antd";
import { Draft } from "@/shared/api/queries/drafts/types";
import { Button, DatePicker, Form, Input } from "@/shared/ui";
import dayjs from "dayjs";

interface DraftCardProps {
    draft?: Partial<Draft>;

    onSubmit(draft: Draft): Promise<unknown>;
}

export function DraftPreview({ draft, onSubmit }: DraftCardProps) {
    const [form] = Form.useForm();
    const schedule = draft?.schedule;
    return (
        <div className={styles.draftPreviewContainer}>
            <Form form={form} onFinish={(event) => (onSubmit({ ...draft, ...event }))} layout="vertical" fields={[
                {
                    name: ["uuid"], value: draft?.uuid
                },
                {
                    name: ["title"], value: draft?.title
                },
                {
                    name: ["location"], value: draft?.location
                },
                {
                    name: ["ownerInfo"], value: draft?.ownerInfo
                },
                {
                    name: ["plainDescription"], value: draft?.plainDescription
                },
                {
                    name: ["tags"], value: draft?.tags
                },
                {
                    name: ["priceLow"], value: draft?.priceLow
                }, {
                    name: ["priceHigh"], value: draft?.priceHigh
                }, {
                    name: ["ageLimitLow"], value: draft?.ageLimitLow
                },
                {
                    name: ["ageLimitHigh"], value: draft?.ageLimitHigh
                },
                {
                    name: ["hasCertificate"], value: draft?.hasCertificate ?? false
                },
                {
                    name: ["schedule"],
                    value: (schedule && (schedule?.length ?? 0) > 0) ? [dayjs(schedule[0].beginsAt), dayjs(schedule[0].endsAt)] : [null, null]
                }
            ]}>
                <Form.Item name="title" label="Название">
                    <Input onChange={(event) => draft && (draft.title = event.target.value)}/>
                </Form.Item>
                <Form.Item name="ownerInfo" label="Источник">
                    <Input onChange={(event) => draft && (draft.ownerInfo = event.target.value)}/>
                </Form.Item>
                <div className={styles.row}>
                    <Form.Item name="hasCertificate">
                        <Checkbox onChange={(event) => draft && (draft.hasCertificate = event.target.value)}>
                            С сертификатом
                        </Checkbox>
                    </Form.Item>
                    <Form.Item name="schedule" label="Дата">
                        <DatePicker.RangePicker showTime/>
                    </Form.Item>
                </div>
                <Form.Item name="location" label="Место проведения">
                    <Input onChange={(event) => draft && (draft.location = event.target.value)}/>
                </Form.Item>

                <div className={styles.row}>
                    <Form.Item name="priceLow" label="Минимальная цена">
                        <InputNumber style={{ width: "100%" }}
                                     onChange={(value) => draft && (draft.priceLow = Number(value) || 0)}/>
                    </Form.Item>
                    <Form.Item name="priceHigh" label="Максимальная цена">
                        <InputNumber style={{ width: "100%" }}
                                     onChange={(value) => draft && (draft.priceHigh = Number(value) || 0)}/>
                    </Form.Item>
                </div>

                <div className={styles.row}>
                    <Form.Item name="ageLimitLow" label="Минимальный возраст">
                        <InputNumber style={{ width: "100%" }}
                                     onChange={(value) => draft && (draft.ageLimitLow = Number(value) || 0)}/>
                    </Form.Item>
                    <Form.Item name="ageLimitHigh" label="Максимальный возраст">
                        <InputNumber style={{ width: "100%" }}
                                     onChange={(value) => draft && (draft.ageLimitHigh = Number(value) || 0)}/>
                    </Form.Item>
                </div>

                <Form.Item name="plainDescription" label="Описание">
                    <Input.TextArea rows={10}
                                    onChange={(event) => draft && (draft.plainDescription = event.target.value)}/>
                </Form.Item>
                <Form.Item name="tags" label="Теги">
                    <Select
                        mode="tags"
                        style={{ width: "100%" }}
                        placeholder="Tags Mode"
                        onChange={(value) => draft && (draft.tags = value)}
                        open={false}
                    />
                </Form.Item>
                <Button htmlType="submit">Опубликовать</Button>
            </Form>
        </div>
    );
}